import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  findById(id: string): Promise<CheckIn | null>
  save(checkIn: CheckIn): Promise<CheckIn>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  countByUserId(userId: string): Promise<number>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
}