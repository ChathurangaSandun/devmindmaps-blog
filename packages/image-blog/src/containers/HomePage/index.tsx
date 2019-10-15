import * as React from "react"
import PersonalBlogWrapper from "./style"
import Posts from "./Posts"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <Posts />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
