import { useEffect } from "react";
import { Stage, Line, Layer } from "konva"


const ConnectingLines = ({ colorCode, direction }) => {
  const id = Math.floor(Math.random() * 100)
  const width = 272
  const height = 50
  const directions = {
    "bottomLeft": [width, 6, width - 40, 6, width - 85, 51],
    "bottomRight": [3, 6, 40, 6, 85, 51]
  }
  
  const points = directions[direction] ? directions[direction] : directions["bottomRight"];
  useEffect(() => {
    const stage = new Stage({
      width: width,
      height: height,
      container: `container${id}`
    })
    
    const layer = new Layer();
    
    const line = new Line({
      points: points,
      stroke: colorCode,
      strokeWidth: 1,
    })
    
    layer.add(line)
    stage.add(layer)

  }, [ colorCode, id, points ])
  // const canvas = useRef(null)
  // useEffect(() => {
    //   const ctx = canvas.current.getContext("2d")
    //   ctx.beginPath()
    //   ctx.lineTo(3, 6)
    //   ctx.lineTo(40, 6)
    //   ctx.lineTo(84, 50)
    //   ctx.rotate(100  * (Math.PI/180));
    //   ctx.strokeStyle = colorCode
    //   ctx.stroke()
    // }, [canvas, colorCode])
    // can you add animation for the lines going from the star to the card
    return (
      <div id={`container${id}`} />
      // <canvas ref={canvas} width={"272px"} height={"50px"}
      //     className="bg-blue-900 border-4" />
    )
  }
  
  export default ConnectingLines
