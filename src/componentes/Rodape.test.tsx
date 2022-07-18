import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../state/hooks/useListaParticipantes";
import { useSorteador } from '../state/hooks/useSorteador';
import Rodape from "./Rodape";

jest.mock("../state/hooks/useListaParticipantes", () => {
	return {
		useListaParticipantes: jest.fn(),
	};
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../state/hooks/useSorteador.ts", () => {
	return {
		useSorteador: () => mockSorteio,
	};
});

jest.mock("react-router-dom", () => {
	return {
		useNavigate: () => mockNavegacao,
	};
});

describe("quando não existem participantes suficientes", () => {
	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue([]);
	});

	test("a brincadeira não pode ser iniciada", () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		);

		const botao = screen.getByRole("button");

		expect(botao).toBeDisabled();
	});
});

describe("quando existem participantes suficientes", () => {
	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue([
			"Thiago",
			"Pedro",
			"Raul",
		]);
	});
	test("a brincadeira pode ser iniciada", () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		);

		const botao = screen.getByRole("button");

		expect(botao).not.toBeDisabled();
	});
	test("a brincadeira foi iniciada", () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		)
    const botao = screen.getByRole("button");
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteio).toHaveBeenCalledTimes(1)
	});
});
