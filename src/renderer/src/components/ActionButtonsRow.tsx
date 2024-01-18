import { ComponentProps } from 'react'
import { NewNoteButton } from "./button/NewNoteButton";
import { DeleteNoteButton } from "./button/DeleteNoteButton";

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
