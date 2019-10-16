import 'reflect-metadata'
import { container, instanceCachingFactory } from 'tsyringe'
import { HttpApiAdapterI } from '@/infrastructure/api-adapter/http-api-adapter.interface'
import { HttpApiAdapterFactory } from '@/infrastructure/api-adapter/http-api-adapter-factory'
import { WorkoutDraftListRepositoryI } from '@/domain/repository-interfaces/workout-draft-list-repository.interface'
import { HttpWorkoutDraftListRepository } from '@/infrastructure/repository/http-workout-draft-list-repository'
import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { WorkoutDraftListService } from '@/infrastructure/service/workout-draft-list-service'
import { WorkoutDraftListVmI } from '@/ui/view-model/workout-draft-list-vm.interface'
import { WorkoutDraftListVm } from '@/ui/view-model/workout-draft-list-vm'

container.register<HttpApiAdapterI>('HttpApiAdapter', {
  useValue: new HttpApiAdapterFactory().create()
})
container.register<WorkoutDraftListRepositoryI>('WorkoutDraftListRepository', {
  useFactory: instanceCachingFactory<WorkoutDraftListRepositoryI>((container) =>
    container.resolve(HttpWorkoutDraftListRepository)
  )
})
container.register<WorkoutDraftListServiceI>('WorkoutDraftListService', {
  useFactory: instanceCachingFactory<WorkoutDraftListServiceI>((container) =>
    container.resolve(WorkoutDraftListService)
  )
})
container.register<WorkoutDraftListVmI>('WorkoutDraftListVm', {
  useClass: WorkoutDraftListVm
})
