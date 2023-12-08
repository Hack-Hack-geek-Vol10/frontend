import Image from "next/image";
import { Box, Button } from "@/lib/mui/muiRendering";
import Header from "@/components/commons/CommonsHeader";
import useTransition from "@/hooks/useTransition";

export default function Home() {
  const { transitionPage } = useTransition();
  return (
    <>
      <Header />
      <Box>
        <Button
          variant='contained'
          onClick={() => {
            transitionPage("/projects");
          }}
        >
          GetStarted
        </Button>
      </Box>
    </>
  );
}
