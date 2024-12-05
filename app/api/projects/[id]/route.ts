import { readProject } from "@/app/data/data";
import { NextResponse } from "next/server";

// /projects/{id} get prject by id
export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
    
    const { id } = await context.params;
    const project = await readProject(id);

    if (!project) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
}