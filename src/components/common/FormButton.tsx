import { Button } from "../ui/button"
import {Loader2} from "lucide-react"

type FormButtonProps = {
    children: React.ReactNode,
    isLoading?: boolean
}


const FormButton = ({children, isLoading}: FormButtonProps) => {
  return (
    <Button type="submit" className="bg-blue-600 hover:bg-blue-500" disabled={isLoading}>
      {isLoading && <Loader2 />}
      {children}
    </Button>
  )
}

export default FormButton