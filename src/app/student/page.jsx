import * as components from "@/components";
import { withPageAuth } from "@/utils/PageAuth";

const StudentPage = withPageAuth(() => {
  return <components.StudentComponent />;
});

export default StudentPage;
