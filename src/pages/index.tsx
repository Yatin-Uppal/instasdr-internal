import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import CreateCampaign from "../components/home/CreateCampaign";
import FeatureList from "../components/home/FeatureList";
import ListBuilding from "../components/home/ListBuilding";
import DomainAuthority from "../components/home/DomainAuthority";
import ResponseHandling from "../components/common/ResponseHandling";
import OurLeads from "../components/home/OurLeads";
import CreateCampaignWork from "../components/home/CreateCampaignWork";
import EmailCreations from "../components/home/EmailCreations";


const responseItems = [
  {
    title: "We’ll auto-handle",
    description: "Positive response (send the owner notification)",
  },
  {
    title: "We’ll auto-handle",
    description: "Negative response (Unsubscribe, do not email)",
  },
  {
    title: "We’ll auto-handle",
    description: "Out of office response (we’ll send send it after 2 weeks)",
  },
  {
    title: "We’ll auto-handle",
    description: "No response (sequence continues)",
  },
  {
    title: "We’ll auto-handle",
    description: "Conversational response (ask them to book a meeting or hand off to real user)",
  },
];

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <HeroSection />
      <CreateCampaign />
      <FeatureList />
      <ListBuilding/>
      <EmailCreations/>
      <DomainAuthority/>
      <ResponseHandling responseItems={responseItems}/>
      <OurLeads/>
      <CreateCampaignWork/>
      <Footer />
    </main>
  );
}
