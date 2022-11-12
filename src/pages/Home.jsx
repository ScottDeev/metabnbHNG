import CardSection from "../components/homecomponents/CardSection";
import Hero from "../components/homecomponents/Hero";
import Metabnb from "../components/homecomponents/Metabnb";
import TagLine from "../components/homecomponents/TagLine";
import Popup from "../components/Popup/Popup";

export default function Home() {
  return (
    <>
      <Hero/>
      <TagLine/>
      <CardSection/>
      <Metabnb/>
      <Popup/>
    </>
  )
}