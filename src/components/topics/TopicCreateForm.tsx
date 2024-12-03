'use client'

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import * as actions from "../../actions/create-topic"
import { useActionState, startTransition } from "react"



const TopicCreateForm = () => {
    const [formState, action] = useActionState(actions.createTopic, {errors: {}});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(() => {
            action(formData)
        })
    }


  return (
    <Popover>
        <PopoverTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-500">Create a topic</Button>
        </PopoverTrigger>
        <PopoverContent>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 p-2 w-60">
                    <h3 className="text-lg">
                        Create a topic
                    </h3>
                    <div className="grid w-full gap-1.5">
                        <Label>Name</Label>
                        <Input name="name" placeholder="Name" type="text" />
                        {formState.errors.name ? <p className="text-red-600 font-semibold">{formState.errors.name}</p> : null}
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="description">Your message</Label>
                        <Textarea name="description" placeholder="Describe your topic" id="description" />
                        {formState.errors.description ? <p className="text-red-600 font-semibold">{formState.errors.description}</p> : null}
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-500">Submit</Button>
                </div>
            </form>
        </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm