import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Welcome to LSJ's World!</h1>

      <div className="blockContainer">
        <Link href="/about">
          <div className="block">
            <h2>자기소개</h2>
            <p>저를 소개합니다!</p>
          </div>
        </Link>

        <Link href="/goals">
          <div className="block">
            <h2>학기 목표</h2>
            <p>이번 학기 제 목표는?</p>
          </div>
        </Link>

        <Link href="/favorites">
          <div className="block">
            <h2>좋아하는 것</h2>
            <p>제가 좋아하는 3가지</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
