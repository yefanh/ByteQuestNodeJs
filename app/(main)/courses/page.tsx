import { getCourse } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async() => {
  const courses = await getCourse();

  return (
    <div className="h-full max-w-[912pz] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Algorithm Courses
      </h1>
      {/* {JSON.stringify(data)} */}
      <List 
        courses={courses}
        activeCourseId={1}
        />
    </div>
  );
};

export default CoursesPage;