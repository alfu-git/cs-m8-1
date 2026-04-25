import ModelCard from "@/components/modelsPage/ModelCard";
import React from "react";

const ModelsPage = async () => {
  const res = await fetch("http://localhost:5000/models", {
    next: { revalidate: 5 },
  });
  const models = await res.json();

  return (
    <section className="my-10">
      <div>
        <h2 className="mb-5 text-3xl font-medium text-center">All Models</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsPage;
