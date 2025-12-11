import HeroBanner from "@/components/layout/HeroBanner";
import EntryCard
 from "@/features/entries/components/EntryCard";
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <EntryCard 
        title="Summer Vibes Shoot"
    subtitle="Model: Sarah"
    date="20 Feb 2025"
    imageUrl="https://picsum.photos/id/1/800/450" 
    videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}
