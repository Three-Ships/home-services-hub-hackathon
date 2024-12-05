import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readProjects, writeProject, deleteProject, updateProject } from "@/app/data/data";


export async function GET() {
  const projects = await readProjects();
  return NextResponse.json(projects, { status: 200 });
}

export async function DELETE(req: Request) {
  const data = await req.json();
  const { id } = data;

  // Validate the input
  if (!id || typeof id !== "string") {
    return NextResponse.json(
      { error: "Invalid input. ID is required and must be a string." },
      { status: 400 }
    );
  }

  // Delete the project
  const deleteResult = await deleteProject(id);
  if (!deleteResult) {
    return NextResponse.json(
      { error: "Failed to delete the project." },
      { status: 500 }
    );
  }
  return NextResponse.json({ status: 204 });
}

export async function POST(req: Request) {
  const data = await req.json();
  const { name, description } = data;

  console.log(req.body);

  // Validate the input
  if (
    !name ||
    typeof name !== "string" ||
    !description ||
    typeof description !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid input. Name and description are required and must be strings." },
      { status: 400 }
    );
  }

  // Create a new project
  const newProject = {
    id: String(randomUUID()),
    name,
    description,
    createdAt: new Date(),
  };

  // Save the project
  const writeResult = await writeProject(newProject);
  if (!writeResult) {
    return NextResponse.json(
      { error: "Failed to save the project." },
      { status: 500 }
    );
  }
  return NextResponse.json(newProject, { status: 201 });
}

export async function PUT(req: Request) {
  const data = await req.json();
  const { id, name, description } = data;

  // Validate the input
  if (
    !id ||
    typeof id !== "string" ||
    !name ||
    typeof name !== "string" ||
    !description ||
    typeof description !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid input. ID, name, and description are required and must be strings." },
      { status: 400 }
    );
  }

  // Update the project
  const updatedProject = {
    id,
    name,
    description,
    updatedAt: new Date(),
  };

  // Save the project
  const updateResult = await updateProject({ ...data, ...updatedProject});
  if (!updateResult) {
    return NextResponse.json(
      { error: "Failed to update the project." },
      { status: 500 }
    );
  }
  return NextResponse.json(updatedProject, { status: 200 });  
}