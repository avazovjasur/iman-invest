import ProjectDetail from "@/components/ProjectDetail"
import useTokenChecker from "@/hooks/useTokenChecker"

const Project = () => {
  useTokenChecker()

  return <>
    <ProjectDetail />
  </>
}

export default Project