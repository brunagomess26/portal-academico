import DetalhesAluno from "@/components/DetalhesAluno";

export default async function PaginaAluno({ params }: { params: Promise<{ ra: string }> }) {
  const { ra } = await params;
  return <DetalhesAluno ra={ra} />;
}
