import Button from "./StyledControlButton";
import { FaRegSave, FaTrashAlt, FaCheck, FaRedoAlt } from "react-icons/fa";

export default function ControlButton({ job, handler, isLoading, calculated }) {
  return (
    <Button disabled={isLoading} onClick={handler}>
      {job === "save" && <FaRegSave />}
      {job === "create" && (calculated ? <FaRedoAlt /> : <FaCheck />)}
      {job === "delete" && <FaTrashAlt />}
    </Button>
  );
}
