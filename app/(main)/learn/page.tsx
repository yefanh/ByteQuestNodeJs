import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import { UserProgress } from '@/components/user-progress';
import { Header } from './header';
import { title } from 'process';
import { getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';

const LearnPage = async() => {
  const userProgressData = getUserProgress();

  const [
    userProgress,
  ] = await Promise.all([
    userProgressData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
          activeCourse={{ title: "Array/List", imageSrc: "/yellow.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscrption={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Array/List" />
      </FeedWrapper>
    </div>
  );
}
export default LearnPage;