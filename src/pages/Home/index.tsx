import {Play} from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton, MinutesAmountInput, TaskInput } from './styles'

export function Home() {
    function hangleSubmit(event){
        event.target.task.value
    }

    return (
        <HomeContainer>
            <form onSubmit={hangleSubmit} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task"
                        name="task" 
                        placeholder="Dê um nome para o seu projeto" 
                        list="task-suggestion"


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
                    disabled={!task}

                >
                    <Play size={24} />
                    Começar
                </StartCountdownButton>

            </form>
        </HomeContainer>
    )
}