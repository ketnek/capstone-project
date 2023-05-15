import Button from "./StyledControlButton";
import { FaRegSave, FaTrashAlt, FaCheck, FaRedoAlt } from "react-icons/fa";

export default function ControlButton({ job, onClick, isLoading, calculated }) {
  return (
    <Button disabled={isLoading} onClick={onClick}>
      {job === "save" && <FaRegSave />}
      {job === "create" && (calculated ? <FaRedoAlt /> : <FaCheck />)}
      {job === "delete" && <FaTrashAlt />}
    </Button>
  );
}
