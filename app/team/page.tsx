"use client";
import Section from "@/components/Section";
import { governance } from "@/lib/data/governance";
import { useState } from "react";

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState("board");

  return (
    <div>
      <Section title="Governance" subtitle="Meet the Board, Team, and Advisors">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("board")}
              className={`px-4 py-2 font-medium border-b-2 transition ${
                activeTab === "board"
                  ? "border-brand-dark text-brand-dark"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Board
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-4 py-2 font-medium border-b-2 transition ${
                activeTab === "team"
                  ? "border-brand-dark text-brand-dark"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveTab("advisors")}
              className={`px-4 py-2 font-medium border-b-2 transition ${
                activeTab === "advisors"
                  ? "border-brand-dark text-brand-dark"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Advisors
            </button>
          </div>
        </div>

        {activeTab === "board" && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Board Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governance.board.map((member, idx) => (
                <div key={idx} className="card">
                  <div className="font-semibold text-lg">{member.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Team Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governance.team.map((member, idx) => (
                <div key={idx} className="card">
                  <div className="font-semibold text-lg">{member.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "advisors" && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Advisors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governance.advisors.map((member, idx) => (
                <div key={idx} className="card">
                  <div className="font-semibold text-lg">{member.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
