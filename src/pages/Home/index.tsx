import {Play} from 'phosphor-react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    Separator, 
    StartCountdownButton, 
    MinutesAmountInput, 
    TaskInput 
} from './styles'



const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1,'Informe a tarefa'),
    minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
    
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


interface Cycle{
    id: string;
    task: string;
    minutesAmount: number;
    
}

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const id = String(new Date().getTime())

    function handleCreateNewCycle(data: NewCycleFormData){
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
           
        }

        setCycles((state) => [...cycles, newCycle])
        setActiveCycleId(id)



        reset();
    }


    const activeCycle = cycles.find(cycle => cycle.id == activeCycleId)

    console.log(activeCycle)
   
    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task"
                        placeholder="Dê um nome para o seu projeto" 
                        list="task-suggestion"
                        {...register('task')}


                    />

                    <datalist id="task-suggestion">
                        <option value="projeto 1" />
                        <option value="projeto 2" />
                        <option value="projeto 3" />
                        <option value="projeto 5" />
                        <option value="teste" />
                    </datalist>


                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}


                    />

                    <span>minutos.</span>

                </FormContainer>


                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>

                    <Separator>:</Separator>

                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton
                    type="submit"
                    disabled={isSubmitDisabled}

                >
                    <Play size={24} />
                    Começar
                </StartCountdownButton>

            </form>
        </HomeContainer>
    )
}