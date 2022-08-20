import Split from "react-split"
export default function Bottom() {

  return (
    <Split sizes = {[0,100,0]} className = "flex" minSize={0}>
      <div className="tp"></div>
      <div className="w3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat provident ipsa cupiditate corrupti, accusamus qui libero unde tempora nostrum. Aliquid quam pariatur consequuntur rerum nemo velit beatae harum sapiente?
      </div>
      <div className="tp"></div>
    </Split>
  )
}
