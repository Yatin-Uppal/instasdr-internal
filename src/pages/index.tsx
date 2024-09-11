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


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
      <main>
        <Header/>
        <HeroSection/>
          <CreateCampaign/>
          <FeatureList/>
        <Footer/>
      </main>
  );
}
