export interface ITask {
    id: number;
    title: string;
    isCompleted: boolean;
    isImportant: boolean;
    deadline: string;
}

export const TASKS: ITask[] = [
    {
        id: 1,
        title: 'Hit the gym',
        isCompleted: false,
        isImportant: false,
        deadline: '01.04.2023'
    },
    {
        id: 2,
        title: 'Pay bills',
        isCompleted: true,
        isImportant: true,
        deadline: ' '
    },
    {
        id: 3,
        title: 'Meet John',
        isCompleted: false,
        isImportant: false,
        deadline: ' '
    },
    {
        id: 4,
        title: 'Buy eggs',
        isCompleted: false,
        isImportant: true,
        deadline: '29.03.2023'
    },
    {
        id: 5,
        title: 'Read a book',
        isCompleted: true,
        isImportant: true,
        deadline: ' '
    },
    {
        id: 6,
        title: 'Organize office',
        isCompleted: false,
        isImportant: false,
        deadline: ' '
    },
    {
        id: 7,
        title: 'Eat dinner',
        isCompleted: false,
        isImportant: false,
        deadline: ' '
    },
    {
        id: 8,
        title: 'Buy apples',
        isCompleted: false,
        isImportant: true,
        deadline: '05.03.2023'
    },
    {
        id: 9,
        title: 'Meet George',
        isCompleted: false,
        isImportant: true,
        deadline: ' '
    },
    {
        id: 10,
        title: 'Feed the cat',
        isCompleted: false,
        isImportant: false,
        deadline: ' '
    },
    {
        id: 11,
        title: 'Write a letter',
        isCompleted: true,
        isImportant: false,
        deadline: ' '
    },
    {
        id: 12,
        title: 'Run 1 km',
        isCompleted: false,
        isImportant: false,
        deadline: '15.01.2022'
    }
]