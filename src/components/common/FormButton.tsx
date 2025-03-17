import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"

type FormButtonProps = {
    children: React.ReactNode,
    isLoading?: boolean
}

const FormButton = ({children, isLoading}: FormButtonProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-primary hover:bg-primary/90" 
      disabled={isLoading}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}

export default FormButton