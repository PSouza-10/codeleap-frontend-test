import { formatDistance } from "date-fns";
import { Post } from "../../types";
import { DeleteIcon, EditIcon } from "../icons";
import "./style.css";
type PostCardProps = Post & { allowEdit: boolean; onDelete: (p: Post) => void; onEdit: (p: Post) => void };
export const PostCard: React.FC<PostCardProps> = (post) => {
  const { allowEdit, author, content, createdAt, title, updatedAt, onDelete, onEdit } = post;
  return (
    <article className="postCard">
      <header className="header">
        <h2>{title}</h2>
        {allowEdit && (
          <>
            <DeleteIcon className="icon" onClick={() => onDelete(post)} />
            <EditIcon className="icon" onClick={() => onEdit(post)} />
          </>
        )}
      </header>
      <section>
        <span>
          <h3>@{author}</h3>
          <p>{formatDistance(Date.now(), updatedAt || createdAt)} ago</p>
        </span>
        <p>{content}</p>
      </section>
    </article>
  );
};
