import { AvatarStack } from "@/registry/winlab/blocks/avatar-stack/avatar-stack"

const people = [
  "教授",
  "博士生",
  "碩士生",
  "專題生",
  "助理",
  "訪問學者",
  "校友",
].map((name, index) => ({ id: String(index), name }))

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <AvatarStack people={people.slice(0, 3)} />
      <AvatarStack people={people} />
    </div>
  )
}
