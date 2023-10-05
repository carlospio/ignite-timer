import {Play} from 'phosphor-react'
import {useForm} from 'react-hook-form'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    Separator, 
    StartCountdownButton, 
    MinutesAmountInput, 
    TaskInput 
} from './styles'

export function Home() {

    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCicle(data: any){
        console.log(data)
    }
   
    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCicle)}>
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