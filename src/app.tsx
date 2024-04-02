import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

interface BotaoProps {
  texto: string
}

function MeuBotao(props: BotaoProps) {
  return <button className="bg-orange-700 h-10 px-5 rounded">{props.texto}</button>
}

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
