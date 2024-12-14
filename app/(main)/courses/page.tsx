import { getCourse, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { userProgress } from "@/db/schema";

const CoursesPage = async() => {
  // const courses = await getCourse();
  // const userProgress = await getUserProgress();
  
  const coursesData = getCourse();
  const userProgressData = getUserProgress();
  
  const [
    courses,
    userProgress,
  ]  = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912pz] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        Algorithm Courses
      </h1>
      {/* {JSON.stringify(data)} */}
      <List 
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
        />
    </div>
  );
};

export default CoursesPage;