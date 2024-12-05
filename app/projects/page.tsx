"use client";
import { useState } from "react";
import { Category, CATEGORIES } from "../types";
import { useRouter } from "next/navigation";

const NewProjectPage = () => {
  return (
    <div className="flex flex-col p-8 gap-8">
      <h1 className="text-2xl">New Project</h1>
      <NewProjectForm />
    </div>
  );
};

const NewProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("Roofing");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, category }),
    });
    if (response.ok) {
      const project = await response.json();
      alert("Project created successfully!");
      setName("");
      setDescription("");
      setCategory("Roofing");
      router.push(`/projects/${project.id}`);
    } else {
      alert("Failed to create project.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="form-control w-full max-w-xs ">
        <div className="label">
          <span className="label-text">Project Category</span>
        </div>
        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(event) => setCategory(event.target.value as Category)}
        >
          <option disabled>
            Pick one
          </option>
          {Object.values(CATEGORIES).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Project Name</span>
        </div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Describe your project here"
        ></textarea>
      </label>
      <button type="submit" className="btn btn-primary">
        Create Project
      </button>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="btn btn-secondary"
      >
        Go Back
      </button>
    </form>
  );
};

export default NewProjectPage;
