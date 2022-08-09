export type IType = {
  id: number
  name: string
}
export type IUser = {
  id: number
  link: string
  name: string
}
export type IComment = {
  comment: string
  typeId: number
  userId: number
}
