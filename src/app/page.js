import DataScience from "@/components/dataScience/DataScience";
import Header from "@/components/header/Header";
import VideoEditing from "@/components/videoEditing/VideoEditing";
import VideoFocusArea from "@/components/videoFocusArea/VideoFocusArea";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mx-4 md:mx-0">
        <Header />
        <VideoEditing />
        <VideoFocusArea />
        <DataScience />
      </div>
    </div>
  );
}
