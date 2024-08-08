import Image from "next/image";

export interface SkillProps {
  name: string;
  type: string;
  image: string;
  link: string;
}

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className="flex transition-all ease-in-out duration-500 flex-col items-center text-white justify-center gap-3 px-10 py-6 rounded-3xl hover:text-white hover:bg-blue-900">
      <Image src={props.image} alt={props.name} width={100} height={100} />
      <p className="text-2xl">{props.name}</p>
    </div>
  );
};

export default Skill;
