import Image from "next/image";

interface Props {
  src: string;
  alt: any;
}

export const SignVisuel = ({ src, alt }: Props) => {
  return (
    <div className="signVisuel bg-gray-200 ">
      <div className="relative w-full max-w-lg">
        <Image src={src} alt={alt} width={150} height={150} className="" />
      </div>
    </div>
  );
};
