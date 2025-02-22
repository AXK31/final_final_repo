import { ChangeEvent } from "react";

interface CheckboxProps {
  id: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onCheckedChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(event.target.checked);
  };

  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
  );
};
