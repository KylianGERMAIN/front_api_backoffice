import Image from "next/image";

interface Props {
  src: string;
  alt: any;
}

export const SignVisuel = ({}: Props) => {
  return (
    <div className="hidden w-1/2 bg-gray-200 md:grid content-center justify-center">
      <div className="relative w-full max-w-lg">
        <Image
          src="/image.png"
          alt="Picture of the author"
          width={150}
          height={150}
          className=""
        />
      </div>
    </div>
  );
};