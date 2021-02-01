import { CellType } from '../@types/CellType'

export const map = {
  [CellType.Dead]: {
    title: 'Мёртвая',
    subtitle: 'или прикидывается',
  },
  [CellType.Alive]: {
    title: 'Живая',
    subtitle: 'и шевелится!',
  },
  [CellType.Life]: {
    title: 'Жизнь',
    subtitle: 'Ку-ку!',
  },
}
