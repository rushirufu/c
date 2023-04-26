import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Formulario from "@/components/Formulario";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import Login from "@/components/Login";
import "antd/";
import App from "@/components/layout/LayoutSSR";

// const DynamicFormulario = dynamic(() => import("../components/Formulario"), {
//   ssr: false,
// });

// const DynamicLogin = dynamic(() => import("../components/Login"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <>
      <App />
      {/* <DynamicFormulario /> */}
      {/* <DynamicLogin /> */}
      {/* <Login /> */}
    </>
  );
}
