import fs from 'fs'
import path from "path"

import Project from '../types/project'

const DATA_FILE = path.resolve("app/data/database.json")

if (!fs.existsSync(DATA_FILE)) {
    console.error(`Data file not found: ${DATA_FILE}`)
}


export const readProjects = async (): Promise<Project[]> => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error(error)
        return []
    }
}

export const writeProject = async (project: Project): Promise<Project|null> => {
    try {
        const projects = await readProjects()
        projects.push(project)
        fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2))
        return project
    } catch (error) {
        console.error(error)
        return null
    }
}

export const deleteProject = async (id: string): Promise<boolean> => {
    try {
        const projects = await readProjects()
        const index = projects.findIndex((project) => project.id === id)
        if (index === -1) {
            return false
        }
        projects.splice(index, 1)
        fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2))
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}