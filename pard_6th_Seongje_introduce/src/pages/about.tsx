import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      <h1 className="title">About Me</h1>
      
      <div className="block">
         <Image
          src="/profile.jpg"
          alt="Profile Photo"
          width={120}
          height={120}
          className="profile-img"
        />
        <p>
          <strong>NAME:</strong> 이성제
        </p>
        <p>
          <strong>ID:</strong> 22200525
        </p>
        <p>
          <strong>AGE:</strong> 23
        </p>
        <p>
          <strong>MBTI:</strong> ISFP
        </p>
      </div>
    </div>
  );
}
