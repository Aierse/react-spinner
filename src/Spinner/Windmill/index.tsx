import styles from './index.module.css'

export default function Windmill({
  diameter = 10,
  color = '#9880ff',
}: {
  diameter?: number
  color?: string
}) {
  return (
    <div
      className={styles['dot-windmill']}
      style={
        {
          '--dot-size': `${diameter}px`,
          '--dot-color': color,
        } as React.CSSProperties
      }
    ></div>
  )
}
