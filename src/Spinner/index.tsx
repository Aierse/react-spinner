import Modal from '@aierse/react-modal'
import Elastic from './Elastic'
import Flashing from './Flashing'
import Collision from './Collision'
import Revolution from './Revolution'
import Carousel from './Carousel'
import Typing from './Typing'
import Windmill from './Windmill'
import Bricks from './Bricks'
import Spin from './Spin'

function SpinnerContainer({
  open,
  diameter = 10,
  children,
}: {
  open: boolean
  diameter?: number
  color?: string
  children: React.ReactNode
}) {
  return (
    <Modal
      open={open}
      backdropProps={{
        style: {
          border: 'none',
          outline: 'none',
          background: 'transparent',
          width: `${diameter * 5 + 10}px`,
          height: `${diameter * 5}px`,
          padding: '0px',
          margin: 'auto',
        },
      }}
      style={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {children}
    </Modal>
  )
}

const Spinner = {
  Bricks: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Bricks diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Carousel: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Carousel diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Collision: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Collision diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Elastic: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Elastic diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Flashing: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Flashing diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Revolution: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Revolution diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Spin: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Spin diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Typing: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Typing diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
  Windmill: ({
    open,
    diameter = 10,
    color,
  }: {
    open: boolean
    diameter?: number
    color?: string
  }) => {
    return (
      <SpinnerContainer open={open} diameter={diameter}>
        <Windmill diameter={diameter} color={color} />
      </SpinnerContainer>
    )
  },
}

export default Spinner
