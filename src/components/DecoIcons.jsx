import rocketSrc from '../assets/icons/rocket.png'
import catSrc from '../assets/icons/cat.png'
import lightningSrc from '../assets/icons/lightning.png'
import codeSrc from '../assets/icons/code.png'

const icons = [
  { src: rocketSrc,    size: 80,  right: '4%',   top: '12%', dur: '22s', delay: '0s',   r0: '-8deg',  r1: '4deg',   op: 0.08 },
  { src: lightningSrc, size: 50,  right: '9%',   top: '35%', dur: '18s', delay: '5s',   r0: '10deg',  r1: '22deg',  op: 0.07 },
  { src: catSrc,       size: 70,  right: '2%',   top: '55%', dur: '24s', delay: '2s',   r0: '4deg',   r1: '-6deg',  op: 0.06 },
  { src: codeSrc,      size: 60,  right: '13%',  top: '70%', dur: '20s', delay: '9s',   r0: '-15deg', r1: '-5deg',  op: 0.07 },
  { src: rocketSrc,    size: 38,  right: '7%',   top: '82%', dur: '16s', delay: '13s',  r0: '20deg',  r1: '30deg',  op: 0.05 },
  { src: lightningSrc, size: 42,  left: '3%',    top: '20%', dur: '21s', delay: '7s',   r0: '-5deg',  r1: '8deg',   op: 0.05 },
  { src: catSrc,       size: 55,  left: '1%',    top: '45%', dur: '26s', delay: '11s',  r0: '8deg',   r1: '-4deg',  op: 0.04 },
  { src: codeSrc,      size: 45,  left: '6%',    top: '65%', dur: '19s', delay: '3s',   r0: '0deg',   r1: '12deg',  op: 0.05 },
  { src: rocketSrc,    size: 65,  left: '2%',    top: '78%', dur: '23s', delay: '16s',  r0: '-12deg', r1: '0deg',   op: 0.06 },
  { src: lightningSrc, size: 35,  right: '22%',  top: '8%',  dur: '17s', delay: '6s',   r0: '5deg',   r1: '18deg',  op: 0.04 },
  { src: catSrc,       size: 48,  left: '18%',   top: '90%', dur: '28s', delay: '14s',  r0: '-8deg',  r1: '2deg',   op: 0.04 },
  { src: codeSrc,      size: 55,  right: '28%',  top: '52%', dur: '21s', delay: '19s',  r0: '12deg',  r1: '0deg',   op: 0.04 },
]

export default function DecoIcons() {
  return (
    <>
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon.src}
          className="deco-icon"
          style={{
            width: icon.size,
            ...(icon.right ? { right: icon.right } : { left: icon.left }),
            top: icon.top,
            '--dur': icon.dur,
            '--delay': icon.delay,
            '--r0': icon.r0,
            '--r1': icon.r1,
            '--op': icon.op,
          }}
          alt=""
        />
      ))}
    </>
  )
}
