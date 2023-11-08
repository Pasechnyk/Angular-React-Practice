export interface ITask {
    id: number;
    title: string;
    status: string;
    priority: string;
    deadline: string;
}

export const TASKS: ITask[] = [
    {
        id: 1,
        title: 'Hit the gym',
        status: 'Not completed',
        priority: 'Not important',
        deadline: '01.04.2023'
    },
    {
        id: 2,
        title: 'Pay bills',
        status: 'Completed',
        priority: 'Important',
        deadline: ' '
    },
    {
        id: 3,
        title: 'Meet John',
        status: 'Not completed',
        priority: 'Not important',
        deadline: ' '
    },
    {
        id: 4,
        title: 'Buy eggs',
        status: 'Not completed',
        priority: 'Important',
        deadline: '29.03.2023'
    },
    {
        id: 5,
        title: 'Read a book',
        status: 'Completed',
        priority: 'Important',
        deadline: ' '
    },
    {
        id: 6,
        title: 'Organize office',
        status: 'Not completed',
        priority: 'Notimportant',
        deadline: ' '
    },
    {
        id: 7,
        title: 'Eat dinner',
        status: 'Not completed',
        priority: 'Not important',
        deadline: ' '
    },
    {
        id: 8,
        title: 'Buy apples',
        status: 'Not completed',
        priority: 'Important',
        deadline: '05.03.2023'
    },
    {
        id: 9,
        title: 'Meet George',
        status: 'Not completed',
        priority: 'Important',
        deadline: ' '
    },
    {
        id: 10,
        title: 'Feed the cat',
        status: 'Not completed',
        priority: 'Not important',
        deadline: ' '
    },
    {
        id: 11,
        title: 'Write a letter',
        status: 'Completed',
        priority: 'Not important',
        deadline: ' '
    },
    {
        id: 10,
        title: 'Run 1 km',
        status: 'Not completed',
        priority: 'Not important',
        deadline: '15.01.2022'
    }
]