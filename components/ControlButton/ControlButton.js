import { Button } from "./StyledControlButton";
import { FaRegSave, FaTrashAlt, FaCheck } from "react-icons/fa";

export default function ControlButton({ job, handler, isLoading }) {
  return (
    <Button disabled={isLoading} onClick={handler}>
      {job === "save" && <FaRegSave />}
      {job === "create" && <FaCheck />}
      {job === "delete" && <FaTrashAlt />}
    </Button>
  );
}
