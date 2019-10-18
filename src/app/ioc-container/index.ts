import 'reflect-metadata'
import { container, instanceCachingFactory } from 'tsyringe'
import { HttpApiAdapterI } from '@/infrastructure/api-adapter/http-api-adapter.interface'
import { HttpApiAdapterFactory } from '@/infrastructure/api-adapter/http-api-adapter-factory'
import { WorkoutDraftRepositoryI } from '@/domain/repository-interfaces/workout-draft-repository.interface'
import { HttpWorkoutDraftRepository } from '@/infrastructure/repository/http-workout-draft-repository'
import { WorkoutDraftListServiceI } from '@/domain/service-interfaces/workout-draft-list-service.interface'
import { WorkoutDraftListService } from '@/infrastructure/service/workout-draft-list-service'
import { WorkoutDraftListVmI } from '@/view-model/workout-draft-list-vm.interface'
import { WorkoutDraftListVm } from '@/view-model/workout-draft-list-vm'
import {
  WorkoutDraftEditorServiceConstructorI,
  WorkoutDraftEditorServiceFactoryI,
  WorkoutDraftEditorServiceI
} from '@/domain/service-interfaces/workout-draft-editor-service.interface'
import {
  WorkoutDraftEditorService,
  WorkoutDraftEditorServiceFactory
} from '@/infrastructure/service/workout-draft-editor-service'
import {
  WorkoutDraftEditorVmConstructorI,
  WorkoutDraftEditorVmFactoryI,
  WorkoutDraftEditorVmI
} from '@/view-model/workout-draft-editor-vm.interface'
import {
  WorkoutDraftEditorVm,
  WorkoutDraftEditorVmFactory
} from '@/view-model/workout-draft-editor-vm'

container.register<HttpApiAdapterI>('HttpApiAdapter', {
  useValue: new HttpApiAdapterFactory().create()
})
// WorkoutDraftRepository
container.register<WorkoutDraftRepositoryI>('WorkoutDraftRepository', {
  useFactory: instanceCachingFactory<WorkoutDraftRepositoryI>((container) =>
    container.resolve(HttpWorkoutDraftRepository)
  )
})
// WorkoutDraftList
container.register<WorkoutDraftListServiceI>('WorkoutDraftListService', {
  useFactory: instanceCachingFactory<WorkoutDraftListServiceI>((container) =>
    container.resolve(WorkoutDraftListService)
  )
})
container.register<WorkoutDraftListVmI>('WorkoutDraftListVm', {
  useClass: WorkoutDraftListVm
})
// WorkoutDraftEditor
container.register<WorkoutDraftEditorServiceConstructorI>(
  'WorkoutDraftEditorServiceConstructor',
  {
    useValue: WorkoutDraftEditorService
  }
)
container.register<WorkoutDraftEditorServiceFactoryI>(
  'WorkoutDraftEditorServiceFactory',
  {
    useFactory: instanceCachingFactory<WorkoutDraftEditorServiceFactoryI>(
      (container) => container.resolve(WorkoutDraftEditorServiceFactory)
    )
  }
)
container.register<WorkoutDraftEditorVmConstructorI>(
  'WorkoutDraftEditorVmConstructor',
  {
    useValue: WorkoutDraftEditorVm
  }
)
container.register<WorkoutDraftEditorVmFactoryI>(
  'WorkoutDraftEditorVmFactory',
  {
    useFactory: instanceCachingFactory<WorkoutDraftEditorVmFactoryI>(
      (container) => container.resolve(WorkoutDraftEditorVmFactory)
    )
  }
)
